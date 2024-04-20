import React from 'react'

class ShoppingListItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: false,
		}
	}
	onToggleActive = () => {
		this.setState(state => ({
			active: !state.active,
		}))
	}

	render() {
		const { item, onDeleteItem, onToggleActive } = this.props
		// const { active } = this.state
		return (
			<div key={item.id} className={`list-item	${item.active && 'active'}`}>
				<div className='item-info'>
					<span>{item.size}</span>
					<p>{item.title}</p>
				</div>
				<div className='item-actions'>
					<span className='check' onClick={onToggleActive}>
						&#10003;
					</span>
					<span className='times' onClick={onDeleteItem}>
						&times;
					</span>
				</div>
			</div>
		)
	}
}

export default ShoppingListItem
