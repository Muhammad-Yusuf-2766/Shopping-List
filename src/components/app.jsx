// In this Project I am using old version class camponents of React. In calss components i am using old version of State of React hook. it is only to understand of old version of React technologies.

import Filter from './filter'
import Information from './information'
import ShoppingAddForm from './shopping-add-form'
import ShoppingList from './shopping-list'

function App() {
	const data = [
		{
			id: 1,
			size: 14,
			title: 'Buy fruits',
			active: false,
		},
		{
			id: 2,
			size: 14,
			title: 'Buy Grapes',
			active: false,
		},
		{
			id: 3,
			size: 14,
			title: 'Buy Cherries',
			active: false,
		},
		// {
		// 	id: 4,
		// 	size: 14,
		// 	title: 'Buy Bananas',
		// },
		// {
		// 	id: 5,
		// 	size: 14,
		// 	title: 'Buy Apples',
		// },
	]

	return (
		<div className='app'>
			<div className='wrapper'>
				<div className='card'>
					<Information />
					<ShoppingAddForm />
					<ShoppingList data={data} />
					<Filter />
				</div>
				<img src='/earth.svg ' alt='' />
			</div>
		</div>
	)
}

export default App
