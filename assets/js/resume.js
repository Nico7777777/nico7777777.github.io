class WorkExpItem {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
    render() {
        return `
            <li class="timeline-item">
                <h4 class="h4 timeline-item-title">ICI software developer intern</h4>
                <span>2023 winter</span>
                <p class="timeline-text">
                    I have been an intern in the ICI team for 2 months, where I learnt about
                    ML algorithms and their use for computer vision, face recognition within
                    robotic systems like robot assistants or drones. I had the opportunity to
                    assist much more experienced fellow students of professionals.
                </p>
            </li>
        `;
    }
}
