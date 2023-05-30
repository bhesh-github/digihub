import React, { useState } from 'react';
import { AiOutlineCaretRight, AiOutlineCaretDown } from 'react-icons/ai';

const toggleCaretObj = {
	rightCaret: 'inline-block',
	downCaret: 'none',
	toggleRow: 'display-row',
};
const CollapsibleTable = () => {
	const [caretClass, setCaretClass] = useState(toggleCaretObj);
	const toggleCaret = () => {
		caretClass.rightCaret === 'inline-block'
			? setCaretClass({
					rightCaret: 'none',
					downCaret: 'inline-block',
					toggleRow: '',	
			  })
			: setCaretClass({
					rightCaret: 'inline-block',
					downCaret: 'none',
					toggleRow: 'display-row',
			  });
	};
	return (
		<div className="collapseable-table">
			<h1>Collapseable Table</h1>
			<table className="container ourTable">
				<thead>
					<tr>
						<th>Check</th>
						<th>Col1</th>
						<th>Col2</th>
					</tr>
				</thead>
				<tbody>
					<tr onClick={toggleCaret}>
						<td>
							<AiOutlineCaretRight
								className="rightCaret"
								style={{ display: `${caretClass.rightCaret}` }}
							/>
							<AiOutlineCaretDown
								className="leftCaret"
								style={{ display: `${caretClass.downCaret}` }}
							/>
							Daevika_Gill46@yahoo.co.in
						</td>
						<td>Guneta</td>
						<td>Adhiraj</td>
					</tr>
					<tr className={caretClass.toggleRow}>
						<td>check@test.com</td>
						<td>audience</td>
						<td>winner</td>
					</tr>
					<tr>
						<td>Charuvrat_Jahar@yahoo.co.in</td>
						<td>Tagore</td>
						<td>Laxmi</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CollapsibleTable;
