/** @type {import('./$types').PageLoad} */

export async function load({fetch}){

        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
		const guides = await res.json()

		if (res.ok) {
			return {
				guides
			}
		}

		return {
			status: res.status,
			error: new Error('could not fetch the guides'),
		}
	}

    //https://dummyjson.com/products?limit=10

    // const productRes = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const productData = await productRes.json()
    //
    // // const products = productData.products

    // return {
    //     guides: productData
    // }

