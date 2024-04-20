import ShoppingListItem from './shoppinglist-item'

const ShoppingList = ({ data, onDelete, onToggleActive }) => {
	return (
		<div className='shopping-list'>
			{data.map(item => (
				<ShoppingListItem
					item={item}
					key={item.id}
					onDeleteItem={() => onDelete(item.id)}
					onToggleActive={() => onToggleActive(item.id)}
				/>
			))}
		</div>
	)
}

export default ShoppingList
