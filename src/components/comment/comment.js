/**
 * Avatar Component
 */

export class Avatar {
	constructor(avatar) {
		this.avatar = avatar;
	}

	render() {
		const imageNum = Math.ceil(Math.random() * 20);
		const url = `./images/faces/128-${imageNum}.jpg`;
		return `
      <div class="comment__avatar" style='background-image: url(${url})'}></div>
    `;
	}
}

/**
 * Heading Component
 */

export class Heading {
	constructor(name, donation) {
		this.name = name;
		this.donation = donation;
	}

	// prettier-ignore
	render() {
		return `
		<div class="comment__heading">
			<span class="comment__name">${this.name}</span>
			${this.donation ? (
				`<span class="comment__donation">donated £${this.donation / 100}</span>`
			) : ""}
		</div>
    `;
	}
}

/**
 * Comment Component
 */

export class Comment {
	constructor(comment) {
		this.comment = comment;
	}

	render() {
		return `
      <div class="comment__comment">${this.comment}</div>
    `;
	}
}
