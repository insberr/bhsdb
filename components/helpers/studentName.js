import { get_student_info } from '../../lib/clientvue'
import Spinner from '../spinner'
function StudentName(props) {
    var { student_info, isLoading, isError } = get_student_info()
    if (isLoading) return <Spinner />
    if (isError) return <div>Error!</div>
    return (
        <span>{ student_info.content.FormattedName }</span>
    )
}

