import { ColumnModel } from '*/models/column.model'
import { BoardModel } from '*/models/board.model'
import { CardModel } from '*/models/card.model'

const createNew = async (data) => {
  try {
    const newColumn = await ColumnModel.createNew(data)
    newColumn.cards = []
    // update columnOrder Array in board collection
    await BoardModel.pushColumnOrder(newColumn.boardId.toString(), newColumn._id.toString())

    return newColumn
  } catch (error) {
    throw new Error(error)
  }
}

const update = async (id, data) => {
  try {
    const updateData = {
      ...data,
      updateData: Date.now()
    }
    if (updateData._id) delete updateData._id
    if (updateData.cards) delete updateData.cards
    if (updateData.updateData) delete updateData.updateData

    const updatedColumn = await ColumnModel.update(id, updateData)

    if (updatedColumn._destroy) {
      // delete many cards in this column
      CardModel.deleteMany(updatedColumn.cardOrder)
    }

    return updatedColumn
  } catch (error) {
    throw new Error(error)
  }
}

export const ColumnService = {
  createNew,
  update
}
