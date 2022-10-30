import React from 'react'
import { BsCheck } from 'react-icons/bs'
import cn from 'classnames'

let count;

const Check = ({ isCompleted }) => {
	return (
		<div
			className={cn(
				'border-2 rounded-lg border-white-400 w-6 h-6 mr-3 flex items-center justify-center',
				{
					'bg-white': isCompleted,
					
				}
			)}
		>
			{isCompleted && <BsCheck size={24} className='text-gray-900' />}
		</div>
	)
}

export default Check

