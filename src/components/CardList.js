import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return (
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card 
							key={i} /* 因為是迴圈必須給 */
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})
			} 
		</div>
	);
}
export default CardList;