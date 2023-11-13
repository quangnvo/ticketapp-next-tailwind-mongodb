"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const TicketForm = () => {
	const startingTicketData = {
		title: "",
		description: "",
		priority: 1,
		progress: 0,
		status: "not started",
		category: "Hardware Problem"
	}

	const [formData, setFormData] = useState(startingTicketData)

	const handleChange = (e: any) => {
		const value = e.target.value
		const name = e.target.name

		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}))
	}


	return (
		<div className="flex justify-center">
			<form>
				<h3>Create your ticket</h3>
				<label>Title</label>
				<input
					type="text"
					id="title"
					name="title"
					onChange={handleChange}
					required={true}
					value={formData.title}
					className="border border-gray-300 rounded-md p-2 m-2"
				/>
			</form>
		</div>
	)
}

export default TicketForm