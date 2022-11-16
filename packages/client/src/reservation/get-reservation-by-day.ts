import { GetReservationsByDay, GetReservationsByDayParams } from '@tfm4/domain-reservation'
import { taskQueue } from '@tfm4/config'
import { createClient } from '../create-client'

export const getReservationByDay = async (params: GetReservationsByDayParams) => createClient(taskQueue.RESERVATION, GetReservationsByDay, params)
