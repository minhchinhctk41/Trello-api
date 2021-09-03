import { BoardModel } from '*/models/board.model'

const createNew = async (data) => {
  try {
    const result = await BoardModel.createNew(data)
    console.log(result)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const BoardService = { createNew }
