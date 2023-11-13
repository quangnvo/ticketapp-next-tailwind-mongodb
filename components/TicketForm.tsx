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

	const handleSubmit = (e: any) => {
		e.preventDefault()
		console.log("submitted")
	}

	return (
		<div className="flex justify-center">
			<form
				className="flex flex-col gap-3 w-1/2"
				method="post"
				onSubmit={handleSubmit}
			>
				<h3>Create your ticket</h3>

				{/* Title */}
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

				{/* Description */}
				<label>Description</label>
				<textarea
					id="description"
					name="description"
					rows={8}
					onChange={handleChange}
					required={true}
					value={formData.description}
					className="border border-gray-300 rounded-md p-2 m-2"
				/>

				{/* Category */}
				<label>Category</label>
				<select
					name="category"
					value={formData.category}
					onChange={handleChange}
					className="border border-gray-300 rounded-md p-2 m-2"
				>
					<option value="Hardware Problem">Hardware Problem</option>
					<option value="Software Problem">Software Problem</option>
					<option value="Project">Project</option>
				</select>

				{/* Priority */}
				<label>Priority</label>
				<div>
					<input
						type="radio"
						id="priority-1"
						name="priority"
						onChange={handleChange}
						value={1}
						checked={formData.priority == 1}
					/>
					<label>1</label>

					<input
						type="radio"
						id="priority-2"
						name="priority"
						onChange={handleChange}
						value={2}
						checked={formData.priority == 2}
					/>
					<label>2</label>

					<input
						type="radio"
						id="priority-3"
						name="priority"
						onChange={handleChange}
						value={3}
						checked={formData.priority == 3}
					/>
					<label>3</label>

					<input
						type="radio"
						id="priority-4"
						name="priority"
						onChange={handleChange}
						value={4}
						checked={formData.priority == 4}
					/>
					<label>4</label>

					<input
						type="radio"
						id="priority-5"
						name="priority"
						onChange={handleChange}
						value={5}
						checked={formData.priority == 5}
					/>
					<label>5</label>
				</div>

				{/* Progress */}
				<label>Progress</label>
				<input
					type="range"
					id="progress"
					name="progress"
					min={0}
					max={100}
					onChange={handleChange}
					value={formData.progress}
					className="border border-gray-300 rounded-md p-2 m-2"
				/>

				{/* Status */}
				<label>Status</label>
				<select
					name="status"
					value={formData.status}
					onChange={handleChange}
					className="border border-gray-300 rounded-md p-2 m-2">
					<option value="not started">Not started</option>
					<option value="started">Started</option>
					<option value="done">Done</option>
				</select>

				{/* Submit */}
				<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded max-w-xs">
					Create Ticket
				</button>
			</form>
		</div>
	)
}

export default TicketForm