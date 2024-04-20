import ShoppingListItem from './shoppinglist-item'

const ShoppingList = ({ data }) => {
	return (
		<div className='shopping-list'>
			{data.map(item => (
				<ShoppingListItem item={item} key={item.id} />
			))}
		</div>
	)
}

export default ShoppingList
