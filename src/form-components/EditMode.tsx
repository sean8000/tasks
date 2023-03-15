/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function createTextBoxandCheck(): JSX.Element {
        return (
            <div>
                <Form.Group controlId="currentName">
                    <Form.Label>Whats your name:</Form.Label>
                    <Form.Control
                        type="textbox"
                        value={name}
                        disabled={!editMode}
                        onChange={updateName}
                    />
                </Form.Group>
                <br></br>
                <Form.Check
                    type="checkbox"
                    id="is-student"
                    label="Student?"
                    checked={student}
                    disabled={!editMode}
                    onChange={updateStudent}
                />
                <div></div>
            </div>
        );
    }

    return (
        <div>
            <Form.Switch
                type="switch"
                id="is-edit"
                label="Edit Mode?"
                checked={editMode}
                onChange={updateEdit}
            />
            <div>
                The user is {editMode ? "in edit mode" : "not in edit mode"}.
            </div>
            <br></br>
            <div>
                {editMode === true ? (
                    createTextBoxandCheck()
                ) : (
                    <span> There is nothing here while not in edit</span>
                )}
            </div>
            <div>
                {name} is {student ? "a student" : "not a student"}.
            </div>
        </div>
    );
}
