export type OssStatus = "merged" | "open";

export interface OssContribution {
	org: string;
	repo: string;
	title: string;
	date?: string;
	status: OssStatus;
	labels?: string[];
	prUrl?: string;
	repoUrl?: string;
}

export type ProjectCategory = "web3" | "web2" | "ext";

export interface Project {
	title: string;
	description: string;
	liveLink?: string;
	githubLink?: string;
	tags?: string[];
	category: ProjectCategory;
}

export interface BlogPost {
	title: string;
	date: string;
	dateTime: string;
	href: string;
	author: string;
}
