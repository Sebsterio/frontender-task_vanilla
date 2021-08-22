//  -- event
//  -- -- title
//  -- -- description
//  -- -- funding
//  -- -- details

import { Title, Description, Funding, Details } from "./elements.js";

export default class {
	constructor(data) {
		this.data = data;
		this.createFactories();
		this.render();
	}

	createFactories() {
		this.title = new Title(this.data.event.title);
		this.description = new Description(this.data.event.description);
		this.funding = new Funding(this.data.funding);
		this.details = new Details(this.data.event.date, this.data.event.location);
	}

	render() {
		return `
      <div class="event">
        ${this.title.render()}
        ${this.description.render()}
        ${this.funding.render()}
        ${this.details.render()}
      </div>
    `;
	}
}
