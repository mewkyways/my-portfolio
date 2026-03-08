import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Section
          id="home"
          title="Hello 👋 My name is Theeranai kruedang"
          subtitle="I enjoy making systems work by: • Creating dashboards • Implementing full-stack systems."
        >
          <div className="hero">
            <div className="heroBox">
              <div className="heroTop">
                <img className="avatar" src="/avatar.jpg" alt="Profile" />
                <div>
                  <h1>Portfolio Website</h1>
                  <p className="muted">
                    รวมงานและโปรเจกต์ที่ทำไว้ — พร้อมลิงก์ให้ดูจริง
                  </p>
                </div>
              </div>

              <div className="btnRow">
                <a className="btn" href="#projects">ดูโปรเจกต์</a>
                <a className="btn ghost" href="#contact">ติดต่อ</a>
                <a className="btn" href="/resume.pdf" download>
                  ดาวน์โหลด Resume
                </a>
              </div>
            </div>

            <div className="stats">
              <div className="stat">
                <div className="statNum">3+</div>
                <div className="muted">Projects</div>
              </div>
              <div className="stat">
                <div className="statNum">React</div>
                <div className="muted">Frontend</div>
              </div>
              <div className="stat">
                <div className="statNum">Deploy</div>
                <div className="muted">Next step</div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="about"
          title="About"
          subtitle="เขียนสั้น ๆ ว่าคุณถนัดอะไร และอยากไปทางไหน"
        >
          <div className="grid2">
            <div className="panel">
              <h3>สิ่งที่ทำ</h3>
              <ul className="list">
               <li>สนใจการพัฒนาเว็บและระบบที่ช่วยแก้ปัญหาในการทำงานจริง</li>
               <li>ชอบทำ dashboard, tracking tools และหน้าเว็บที่ใช้งานง่าย</li>
               <li>กำลังพัฒนาทักษะ React, Git, GitHub และการ deploy เว็บจริง</li>
              </ul>
            </div>

            <div className="panel">
              <h3>Skills</h3>
              <div className="chips">
                {["HTML", "CSS", "JavaScript", "React", "Vite", "Git", "GitHub", "Netlify"].map((s) => (
                <span className="chip" key={s}>{s}</span>
                  ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="เดี๋ยวค่อยเปลี่ยนลิงก์จริงทีหลังได้"
        >
          <div className="cards">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>
<Section
  id="services"
  title="Services"
  subtitle="สิ่งที่ผมสามารถต่อยอดและพัฒนาได้"
>
  <div className="grid2">
    <div className="panel">
      <h3>Frontend Website</h3>
      <p className="muted">สร้างหน้าเว็บ portfolio, landing page และหน้า dashboard</p>
    </div>

    <div className="panel">
      <h3>Dashboard UI</h3>
      <p className="muted">ออกแบบหน้าแสดงข้อมูลให้ดูง่ายและเป็นระบบ</p>
    </div>

    <div className="panel">
      <h3>Tracking Tools</h3>
      <p className="muted">ต่อยอดเป็นระบบติดตามงาน สต๊อก หรือสถานะต่าง ๆ ได้</p>
    </div>

    <div className="panel">
      <h3>Web App Learning Projects</h3>
      <p className="muted">กำลังพัฒนาโปรเจกต์จริงเพื่อเพิ่มความสามารถและผลงาน</p>
    </div>
  </div>
        </Section>
        <Section id="contact" title="Contact" subtitle="ส่งข้อความถึงฉันได้เลย">
          <form className="panel form" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />

            <label>
              <span className="muted">ชื่อ</span>
              <input name="name" placeholder="ชื่อของคุณ" required />
            </label>

            <label>
              <span className="muted">อีเมล</span>
              <input name="email" type="email" placeholder="you@email.com" required />
            </label>

            <label>
              <span className="muted">ข้อความ</span>
              <textarea name="message" rows="5" placeholder="พิมพ์ข้อความ..." required />
            </label>

            <button className="btn" type="submit">ส่งข้อความ</button>
          </form>
        </Section>
      </main>

      <Footer />
    </div>
  );
}