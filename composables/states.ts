
export const getData = async () => {
    const client = useSupabaseClient()

    const { data } = await useAsyncData('test-table', async () => {
        return await client.from('test-table').select('id, powered, name')
    })
    //console.log('data inside= ', data)
    return data
}

export const useCurrentData = () => useState('useCurrentData', () => null)