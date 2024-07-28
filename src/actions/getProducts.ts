'use server'

import { response as apiResponse } from '@/constants/products'
import { Response } from '@/types/products'

export const getProducts = async (): Promise<Response> => {
  return new Promise<Response>(resolve => {
    setTimeout(() => {
      resolve(apiResponse)
    }, 1000)
  })
}
