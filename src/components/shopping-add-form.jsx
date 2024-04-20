import React from 'react'

class ShoppingAddForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			number: '',
		}
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onAdd = () => {
		const data = {
			title: this.state.title,
			number: this.state.number,
		}
		console.log(data)
	}

	render() {
		return (
			<div className='form'>
				<input
					type='text'
					className='title'
					placeholder='Title'
					onChange={this.onChange}
					name='title'
				/>
				<input
					type='number'
					className='nymber'
					placeholder='13'
					onChange={this.onChange}
					name='number'
				/>
				<button onClick={this.onAdd}>Add</button>
			</div>
		)
	}
}

export default ShoppingAddForm
