import { Select } from "@headlessui/react"

export default function SortBy() {
    return (
        <Select
            className={"lg:w-[150px] w-[125px] h-[40px] rounded-md pl-[10px]"}
        >
            <option value="active">Цена меньше</option>
            <option value="paused">Цена больше</option>
            <option value="delayed">PS5</option>
            <option value="delayed">PS4</option>
        </Select>
    )
}
