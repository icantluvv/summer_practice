import { Select } from "@headlessui/react"

export default function SwitchCount() {
    return (
        <div className="lg:mx-4 mx-2">
            <Select className={"w-[55px] h-[40px]  rounded-md pl-[10px]"}>
                <option value="active">12</option>
                <option value="paused">24</option>
                <option value="delayed">36</option>
            </Select>
        </div>
    )
}
