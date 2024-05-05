// In this Project I am using old version class camponents of React. In calss components i am using old version of State of React hook. it is only to understand of old version of React technologies.

import React from 'react'
import { v4 as uuid4 } from 'uuid'
import { arr } from '../constants'
import Filter from './filter'
import Information from './information'
import SearchPanel from './search-panel'
import ShoppingAddForm from './shopping-add-form'
import ShoppingList from './shopping-list'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: arr,
			search: '',
			filter: '',
		}
	}

	onDelete = id => {
		const newArr = this.state.data.filter(item => item.id !== id)
		this.setState({
			data: newArr,
		})
	}

	onToggleActive = id => {
		const newArr = this.state.data.map(item => {
			if (item.id === id) {
				return { ...item, active: !item.active }
			}

			return item
		})
		this.setState({
			data: newArr,
		})
		console.log(newArr)
	}

	onAdd = item => {
		const { title, number } = item
		const newData = { title, size: number, active: false, id: uuid4() }
		const newArr = [...this.state.data, newData]
		this.setState({
			data: newArr,
		})
	}

	SearchData = (arr, term) => {
		if (term.length === 0) {
			return arr
		} else {
			return arr.filter(item => item.title.toLowerCase().indexOf(term) > -1)
		}
	}

	onChangeSearch = search => {
		this.setState({ search })
	}

	filterData = (arr, filter) => {
		switch (filter) {
			case 'completed':
				return arr.filter(item => item.active)
			case 'big-size':
				return arr.filter(item => item.size > 10)
			default:
				return arr
		}
	}

	onFilterSelect = filter => {
		this.setState({ filter })
	}

	render() {
		const { data, search, filter } = this.state
		const allData = this.filterData(this.SearchData(data, search), filter)

		return (
			<div className='app'>
				<div className='wrapper'>
					<div className='card'>
						<Information length={data.length} />

						<SearchPanel onChangeSearch={this.onChangeSearch} />

						<ShoppingAddForm onAdd={this.onAdd} />
						<ShoppingList
							data={allData}
							onDelete={this.onDelete}
							onToggleActive={this.onToggleActive}
						/>
						<Filter filter={filter} onFilterSelect={this.onFilterSelect} />
					</div>
					<img src='/earth.svg ' alt='' />
				</div>
			</div>
		)
	}
}

export default App
