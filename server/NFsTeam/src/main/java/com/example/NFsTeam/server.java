import java.sql.DriverManager;

public class server {

    public List<Object> getProduit() throws SQLException {
        try (Connection co = DriverManager.getConnection("BDD", "utilisateur", "motdepasse")) {
            String sql = "requete where valeur=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1,"valeur");
                try (ResultSet rs = st.execute()) {
                    List<> =new ArrayList<>();
                    while (rs.next()) {
                        Object o = new Object();
                        o.SetId(rs.getInt("colonne ou index"));
                    [...]
                        List.add(o);
                    }
                    return List;
                }
                return null;
            }
        }
    }
    public void setObject() throws SQLException {
        try (Connection co = DriverManager.getConnection("BDD", "utilisateur", "motdepasse")) {
            String sql = "Insert Into object (valeur) values(?)";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1,"valeur");
                st.execute();
            }
        }
    }
}