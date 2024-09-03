export type Message ={
    role: string;
    content: string;
}

export type DataCard ={
    rowCount: number;
    messages: Message[];
}

export type Dataset ={
    id: number;
    name: string;
    modality: string;
    size: string;
    creationDate: string;
    updatedDate: string;
    stars: number;
    forks: number;
    downloads: number;
    issues: number;
    comments: number;
    description: string;
    tags: string[];
    format: string;
    license: string;
    url: string;
    doi: string;
    dataCard: DataCard;
}

export const datasets: Dataset[] = [
    {
        id: 1,
        name: "CT Scan Data 001",
        modality: "CT",
        size: "10GB",
        creationDate: "2021-01-01",
        updatedDate: "2023-02-15",
        stars: 8,
        forks: 4,
        downloads: 150,
        issues: 3,
        comments: 7,
        description: "CT scan dataset of lung tissues with annotations.",
        tags: ["lung", "CT", "medical"],
        format: "nii.gz",
        license: "CC BY-SA 4.0",
        url: "https://example.com/ct-scan-data-001",
        doi: "10.5281/zenodo.54321",
        dataCard: {
            rowCount: 10,
            messages: [
                {
                    role: "admin",
                    content: "This dataset is for research purposes only."
                }
            ]
        }
    },
    {
        id: 2,
        name: "MRI Brain Data 002",
        modality: "MRI",
        size: "15GB",
        creationDate: "2020-05-20",
        updatedDate: "2023-03-01",
        stars: 10,
        forks: 8,
        downloads: 200,
        issues: 1,
        comments: 15,
        description: "High-resolution MRI scans of human brains, annotated for neurological research.",
        tags: ["brain", "MRI", "neurology"],
        format: "nii.gz",
        license: "MIT",
        url: "https://example.com/mri-brain-data-002",
        doi: "10.5281/zenodo.98765",
        dataCard: {
            rowCount: 15,
            messages: [
                {
                    role: "contributor",
                    content: "Please cite this dataset when used in publications."
                }
            ]
        }
    },
    {
        id: 3,
        name: "X-ray Chest Data 003",
        modality: "X-ray",
        size: "5GB",
        creationDate: "2019-08-15",
        updatedDate: "2022-10-30",
        stars: 7,
        forks: 5,
        downloads: 180,
        issues: 2,
        comments: 12,
        description: "X-ray images of chest regions with diagnostic labels.",
        tags: ["chest", "X-ray", "diagnostic"],
        format: "dicom",
        license: "GPL-3.0",
        url: "https://example.com/xray-chest-data-003",
        doi: "10.5281/zenodo.13579",
        dataCard: {
            rowCount: 8,
            messages: [
                {
                    role: "admin",
                    content: "This dataset is available under the GPL-3.0 license."
                },
                {
                    role: "user",
                    content: "Very useful for training diagnostic models."
                }
            ]
        }
    },
    {
        id: 4,
        name: "Ultrasound Liver Data 004",
        modality: "Ultrasound",
        size: "8GB",
        creationDate: "2022-11-05",
        updatedDate: "2023-06-12",
        stars: 9,
        forks: 6,
        downloads: 250,
        issues: 4,
        comments: 20,
        description: "Ultrasound images of liver with expert annotations.",
        tags: ["liver", "Ultrasound", "annotations"],
        format: "png",
        license: "CC BY-NC 4.0",
        url: "https://example.com/ultrasound-liver-data-004",
        doi: "10.5281/zenodo.24680",
        dataCard: {
            rowCount: 12,
            messages: [
                {
                    role: "admin",
                    content: "Annotations are provided by expert radiologists."
                }
            ]
        }
    },
    {
        id: 5,
        name: "PET Scan Data 005",
        modality: "PET",
        size: "12GB",
        creationDate: "2021-03-10",
        updatedDate: "2023-07-18",
        stars: 6,
        forks: 3,
        downloads: 130,
        issues: 5,
        comments: 8,
        description: "PET scan data focused on metabolic activity in various organs.",
        tags: ["PET", "metabolism", "organs"],
        format: "nii.gz",
        license: "CC0 1.0",
        url: "https://example.com/pet-scan-data-005",
        doi: "10.5281/zenodo.12346",
        dataCard: {
            rowCount: 9,
            messages: [
                {
                    role: "user",
                    content: "The data is very detailed, great for metabolic research."
                }
            ]
        }
    }
];
