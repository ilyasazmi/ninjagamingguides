/** @type {import('./$types').PageLoad} */
import { redirect } from '@sveltejs/kit';
export async function load({fetch, params}){
        // const id = params.id

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
		const guide = await res.json()

        // console.log(guide)

		if (res.ok) {
			return {
				guide
			}
		}

        if (!res.ok){
            throw redirect(301, '/guides');
        }


		// return {
		// 	status: 301,
		// 	redirect: '/guides'
		// }
	}