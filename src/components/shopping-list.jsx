import ShoppingListItem from './shoppinglist-item'

const ShoppingList = ({ data, onDelete, onToggleActive }) => {
	return (
		<div className='shopping-list'>
			{data.length ? (
				data.map(item => (
					<ShoppingListItem
						item={item}
						key={item.id}
						onDeleteItem={() => onDelete(item.id)}
						onToggleActive={() => onToggleActive(item.id)}
					/>
				))
			) : (
				<h1
					style={{ textAlign: 'center', color: 'white', alignItems: 'center' }}
				>
					Not found data
				</h1>
			)}
		</div>
	)
}

export default ShoppingList
