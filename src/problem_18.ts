// Problem 18 — Cloud Storage Usage Tracker

interface UploadAction{
    type: "upload",
    sizeMB: number
}
interface DeleteAction{
    type: "delete",
    sizeMB: number
}

function updateStorageUsage(currentUsageMB: number, action: UploadAction | DeleteAction):
number {
    
    if (action.type === "upload") {
        return currentUsageMB + action.sizeMB;
    }

    const newUsage = currentUsageMB - action.sizeMB;

    if (newUsage < 0) {
        return 0;
    }

    return newUsage;
};


console.log(
    updateStorageUsage(2000, {
        type: "upload",
        sizeMB: 500
    })
);
// 2500

console.log(
    updateStorageUsage(2000, {
        type: "delete",
        sizeMB: 800
    })
);
// 1200

console.log(
    updateStorageUsage(300, {
        type: "delete",
        sizeMB: 1000
    })
);
// 0
