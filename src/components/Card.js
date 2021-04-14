import React from 'react';

const Card = ({name, email, id}) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shawow-5'> {/* tachyons套件 */}
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} /> {/* templete string */}
			<div>
				<h2>{name}</h2> {/* 因為是js expression，所以要被包起來 */}
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;

