import React, {useEffect, useState} from 'react';

const TodoFrom = () => {
	const [list, setList] = useState([]);
	useEffect(() => {
		console.log(list);
	}, [list]);
	const onKeyPressInput = (e) => {
		if (e.key === 'Enter') {
			setList([
				...list,
				{
					id: list.length + 1,
					item: e.target.value,
				},
			]);
			//인풋창 초기화
			e.target.value = '';
		}
	};

	const onClickButton = (id) => {
		// console.log(list.indexOf(item));

		// const newList = list.filter( (cur,idx) => cur !== item );
		const newList = [];
		list.map((cur) => {
			if (cur.id !== id) newList.push(cur);
		});
		// console.log(newList);
		setList(newList);
	};

	const onClickChange = (item) => {
		let renewList = [...list]; //데이터 주소값을 중복을 피하기위해 값을 복사
		let reItem = window.prompt('변경 될 값입력');

		list.map((cur, idx) => {
			if (item === cur.id) renewList[idx].item = reItem;
		});

		console.log(renewList);
		setList(renewList);
	};

	return (
		<div className="list_box">
			<h1>TODO LIST</h1>
			{!list.length && (
				<div className="animation_box">
					<img src="img/bird.png" className="bird" alt="새 부품" />
					<img src="img/bird_t.png" className="bird_t" alt="새 부품" />
					<img src="img/bird_b.png" className="bird_b" alt="새 부품" />
				</div>
			)}

			<input type="text" className="input_todo" placeholder="Please enter a to-do!" onKeyPress={onKeyPressInput} />
			<ul className="list_todo">
				{list.map((item, idx) => {
					return (
						<li key={idx + 'keys'}>
							<p>{item.item}</p>
							{/* {item && console.log(item.item)} */}
							<button onClick={() => onClickButton(item.id)}>x</button>
							<button onClick={() => onClickChange(item.id)}>수정</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoFrom;
