import Double from '@/components/Double'
import { projects } from '@/configs/data/projects'

const Work = () => {
  return (
    <section className="container" id="work">
      <div className="pt-[10vh] ">
        <h2>Work we’re proud of</h2>
        <p>
          Over the years, I completed dozens of projects with several clients. Here is a selection
          of the best ones.
        </p>
        <div>
          <Double projects={[projects[0], projects[1]]} />
          <Double projects={[projects[2], projects[3]]} reversed />
          <Double projects={[projects[4], projects[5]]} />
        </div>
      </div>
    </section>
  )
}
export default Work
