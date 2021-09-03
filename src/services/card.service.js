import { CardModel } from '*/models/card.model'

const createNew = async (data) => {
  try {
    const result = await CardModel.createNew(data)
    console.log(result)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const CardService = { createNew }
