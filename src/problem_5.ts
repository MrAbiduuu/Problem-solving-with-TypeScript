// Problem 5 — Student Result Analyzer


type Student = {
    name: string;
    marks: number[];
};

type StudentResult = {
    name: string;
    average: number;
    result: "Passed" | "Failed";
};

function getStudentResult(student: Student): StudentResult {
    if (student.marks.length === 0) {
        return {
            name: student.name,
            average: 0,
            result: "Failed"
        };
    }

    const total = student.marks.reduce((sum, mark) => {
        return sum + mark;
    }, 0);

    const average = total / student.marks.length;

    return {
        name: student.name,
        average: average,
        result: average >= 40 ? "Passed" : "Failed"
    };
}

console.log(
    getStudentResult({
        name: "Rafi",
        marks: [80, 75, 90, 85]
    })
);

console.log(
    getStudentResult({
        name: "Nabil",
        marks: [30, 35, 40, 25]
    })
);

console.log(
    getStudentResult({
        name: "Karim",
        marks: []
    })
);
