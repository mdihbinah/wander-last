"use client";

import {AlertDialog, Button} from "@heroui/react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { deleteAction } from "../lib/action";

export function DeleteAlert({destination}) {
    const { _id, destinationName, country, category, duration, departureDate, price, imageUrl, description } = destination
    const handleDelete = async() => {
        await deleteAction(_id)
    }
  return (
    <AlertDialog>
      <Button  variant="danger"><MdOutlineDeleteForever />Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                <MdOutlineDeleteForever />Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}