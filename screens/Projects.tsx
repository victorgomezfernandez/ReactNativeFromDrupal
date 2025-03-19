import Header from "@/components/Header";
import Project from "@/components/Project";
import { useUser } from "@/hooks/useUser";
import { getAllProjects } from "@/services/ProjectsService";
import { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

interface ProjectType {
  field_project_name: string;
  field_project_description: string;
  field_project_link: string;
  field_project_finished: string;
}

export default function Projects() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const { userName } = useUser();

  const closeMenu = () => {
    setMenuOpened(false);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const data: ProjectType[] | undefined = await getAllProjects();
      if (data) {
        setProjects(data);
      }
    };

    fetchProjects();
  }, []);

  const ongoingProjects = projects.filter((p) => p.field_project_finished === "Ongoing");
  const finishedProjects = projects.filter((p) => p.field_project_finished === "Finished");

  return (
    <>
      <StatusBar backgroundColor="#1e1e1e" />
      <Header section="PROJECTS" menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback onPress={() => closeMenu()}>
          <View>
            <Text style={styles.title}>My projects</Text>
            {userName && ongoingProjects.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>Ongoing Projects</Text>
                <View style={styles.projectsList}>
                  {ongoingProjects.map((p) => (
                    <Project key={p.field_project_link} title={p.field_project_name} description={p.field_project_description} link={p.field_project_link} />
                  ))}
                </View>
              </>
            )}
            {finishedProjects.length > 0 ? (
              <>
                <Text style={styles.sectionTitle}>Finished Projects</Text>
                <View style={styles.projectsList}>
                  {finishedProjects.map((p) => (
                    <Project key={p.field_project_link} title={p.field_project_name} description={p.field_project_description} link={p.field_project_link} />
                  ))}
                </View>
              </>
            ) : (
              <Text style={styles.loadingText}>
                {projects.length > 0 ? "No projects available for guest users." : "Loading projects..."}
              </Text>
            )}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fcba03",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#000",
    textAlign: "center",
  },
  projectsList: {
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    color: "#aaa",
    marginTop: 20,
  },
});
