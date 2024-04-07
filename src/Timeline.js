import React from 'react'

const Timeline = ({ events }) => {
  let items = []
  events.map((eventItem) => ( items.push({name: eventItem, active: true}) ))
	const totalItems = items.length;
	const numberOfActiveItems = items.filter(item => item.active).length;
	const progressBarWidth = totalItems > 1 ? (numberOfActiveItems - 1) / (totalItems - 1) * 100 : 0;
	
	return (
    <div>
		<div className="timeline">
			<div className="timeline-progress" style={{ width: `${progressBarWidth}%`}}></div>
			<div className="timeline-items">
				{items.map((item, i) => (
					<div key={i} className={"timeline-item" + (item.active ? ' active' : '')}>
						<div className="timeline-content">
							{item.name}
						</div>
					</div>
				))}
			</div>
		</div>
    <br /><br /><br /><br />
    </div>
	)
}

export default Timeline
