export interface NavLink {
    label: string;
    href: string;
}

export interface Sector {
    id: string;
    title: string;
    description: string;
    subtext: string;
    icon: string;
    image: string;
    alt: string;
}

export interface ComparisonRow {
    metric: string;
    dewcore: string;
    dewcoreSub?: string;
    desalination: string;
    cisterns: string;
}

export interface Stat {
    label: string;
    value: string;
    icon: string;
}