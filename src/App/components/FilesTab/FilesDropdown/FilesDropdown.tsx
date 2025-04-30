import React, { useEffect, useState } from 'react'
import icons from '../../../shared/icons'

function FilesDropdown({
	files,
	onSelect,
}: {
	files: { name: string; date: string; url: string }[]
	onSelect: (file: { name: string; date: string; url: string }) => void
}) {
	return (
		<div className="files-dropdown">
			{files.map((file, index) => (
				<div key={index} className="files-dropdown__item" onClick={() => onSelect(file)}>
					<span style={{ flex: '1.5 1 0' }}>{file.name}</span>
					<span style={{ flex: '1 1 0', color: '#959599' }}>{file.date}</span>
					<span style={{ flex: '0.5 1 0' }}>{icons.Download}</span>
				</div>
			))}
		</div>
	)
}

export default FilesDropdown
