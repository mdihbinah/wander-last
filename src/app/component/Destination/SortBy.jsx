import {Label, ListBox, Select} from "@heroui/react";

export function SortBy() {
  return (
    <Select className="w-[256px]" placeholder="Sory By">
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="Price" textValue="Price">
            Price
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="Rating" textValue="Rating">
            Rating
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
  );
}