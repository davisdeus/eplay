import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getJogoEmDestaque: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getJogosPromocoes: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getJogosEmBreve: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getJogosAcao: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getJogosEsportes: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getJogosSimulacao: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getJogosLuta: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getJogosRpg: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getJogos: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetJogoEmDestaqueQuery,
  useGetJogosPromocoesQuery,
  useGetJogosEmBreveQuery,
  useGetJogosAcaoQuery,
  useGetJogosEsportesQuery,
  useGetJogosSimulacaoQuery,
  useGetJogosLutaQuery,
  useGetJogosRpgQuery,
  useGetJogosQuery
} = api

export default api
