import { Label, ListBox, Select } from "@heroui/react";

export function SelectCategory({ category }) {
    return (
        <Select className="w-[256px]" placeholder="Select Category">
            <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
                <ListBox>
                    {
                        category.map((ele, index) => {
                            return (
                                <ListBox.Item key={index} id={`${ele} ${index}`} textValue={ele}>
                                    {ele}
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            )
                        })
                    }

                </ListBox>
            </Select.Popover>
        </Select>
    );
}