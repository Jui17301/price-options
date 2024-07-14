import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
import Link from '../Link/Link';

const LineChart = () => {
const subjectMarksData=[
  {"id": 1, "name": "Student 1", "math_marks": 75, "physics_marks": 80, "chemistry_marks": 78},
  {"id": 2, "name": "Student 2", "math_marks": 82, "physics_marks": 85, "chemistry_marks": 88},
  {"id": 3, "name": "Student 3", "math_marks": 68, "physics_marks": 72, "chemistry_marks": 70},
  {"id": 4, "name": "Student 4", "math_marks": 90, "physics_marks": 92, "chemistry_marks": 89},
  {"id": 5, "name": "Student 5", "math_marks": 85, "physics_marks": 88, "chemistry_marks": 84},
  {"id": 6, "name": "Student 6", "math_marks": 77, "physics_marks": 79, "chemistry_marks": 80},
  {"id": 7, "name": "Student 7", "math_marks": 92, "physics_marks": 90, "chemistry_marks": 91},
  {"id": 8, "name": "Student 8", "math_marks": 70, "physics_marks": 68, "chemistry_marks": 72},
  {"id": 9, "name": "Student 9", "math_marks": 88, "physics_marks": 87, "chemistry_marks": 85},
  {"id": 10, "name": "Student 10", "math_marks": 80, "physics_marks": 82, "chemistry_marks": 83}
]


  return (
    <div>
      <LChart width={800} height={400} data={subjectMarksData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
      <Line dataKey="math_marks" stroke='red'></Line>
      <Link dataKey="physics_marks" stroke='yellow'></Link>
      <Link dataKey="chemistry_marks" stroke='green'></Link>
      </LChart>
    </div>
  )
}

export default LineChart
