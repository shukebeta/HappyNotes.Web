import type { NoteResponse } from '~/types/note'
export const fetchLatestNotes = async (): Promise<NoteResponse> => {
    const config = useRuntimeConfig()
    return await $fetch<NoteResponse>(`${config.public.apiBaseUrl}/notes/latest/5/1`)
}
