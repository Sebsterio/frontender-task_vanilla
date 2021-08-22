import Comment from "../comment";

export default class {
	constructor(commentsData) {
		this.commentsData = commentsData;
		this.createFactories();
		this.render();
	}

	createFactories() {
		this.comments = this.commentsData.map((comment) => new Comment(comment));
	}

	render() {
		return `
			<div class="comments">
				${this.comments.map((comment) => comment.render()).join("")}
			</div>
		`;
	}
}
