import action from '../interfaces/action.ts';
import UIObject from '../interfaces/uiobject.ts';
import { ACTION_TYPES, FILE_TYPES } from '../data/lssContext.ts';
import { generateUID } from "../data/cache.ts";
import * as logger from "../tools/logger.ts"; 

export default class Action implements action {

    fileType: FILE_TYPES;
    uid: string;
    name: string;
    variables : string[];
    styles : string[];
    variations: string[];
    actions: string[];
    parent?  : string | undefined;
    type: ACTION_TYPES;
    subject : string;

    constructor(type: ACTION_TYPES, subject: string, name: string) {
        this.fileType = FILE_TYPES.ACTION;
        this.uid = this.uid = generateUID(this);;
        this.subject = subject;
        this.name = name;
        this.type = type;
        this.variables = [];
        this.styles = [];
        this.variations = [];
        this.actions = [];
        logger.log('New action',this.name)
    }

    compile() : string {

        const out = {
            fileType: this.fileType,
            uid: this.uid,
            name: this.name,
            type: this.type,
            subject: this.subject,
            variables: this.variables,
            styles: this.styles,
            variations: this.variations,
            actions: this.actions
        };

        return JSON.stringify(out);
    }

    inherit(parent: UIObject) : void {

    }

    setParent(parent: string) : void {
        this.parent = parent;
    }
};
