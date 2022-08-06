import useSWR, {SWRConfiguration} from 'swr';

// @ts-ignore
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.');
        // @ts-ignore
        error.info = await res.json();
        // @ts-ignore
        error.status = res.status;
        throw error;
    }

    return res.json();
}

const config: SWRConfiguration = {
    // fallbackData: "fallback",
    revalidateOnMount: true,
    loadingTimeout: 3000
}

export const useUsers = () => {
    return useSWR<any>(`http://localhost:3001/test`, fetcher, config);
}
