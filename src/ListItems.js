import React from 'react';

import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props) {
	const items = props.items;
	const ListItems = items.map((item) => {
		return (
			<div className="list" key={item.key}>
				<p>
					<input
						type="text"
						id={item.id}
						value={item.text}
						onChange={(e) => {
							props.setUpdate(e.target.value, item.key);
						}}
					/>
				</p>
				<span>
					<FontAwesomeIcon
						className="faicons"
						icon="trash"
						onClick={() => props.deleteItem(item.key)}
					/>
				</span>
			</div>
		);
	});
	return (
		<div className="list-container">
			<FlipMove duration={300} easing="ease-in-out" className="flip-move">
				{ListItems}
			</FlipMove>
		</div>
	);
}

export default ListItems;
