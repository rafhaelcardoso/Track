import iProjects from "./iProjects";

export default interface iTask {
    durationInSeconds: number,
    description: string,
    project: iProjects,
}