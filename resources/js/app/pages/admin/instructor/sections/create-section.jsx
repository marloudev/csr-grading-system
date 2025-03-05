import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
    Alert,
    Autocomplete,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
} from "@mui/material";
import { useState } from "react";
import store from "@/app/pages/store/store";
import {
    get_instructor_thunk,
    store_instructor_thunk,
} from "../redux/instructor-thunk";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { get_available_subject_thunk } from "../../subjects/redux/subject-thunk";

// const top100Films = [
//     { title: "The Shawshank Redemption", year: 1994 },
//     { title: "The Godfather", year: 1972 },
//     { title: "The Godfather: Part II", year: 1974 },
//     { title: "The Dark Knight", year: 2008 },
//     { title: "12 Angry Men", year: 1957 },
//     { title: "Schindler's List", year: 1993 },
//     { title: "Pulp Fiction", year: 1994 },
//     {
//         title: "The Lord of the Rings: The Return of the King",
//         year: 2003,
//     },
//     { title: "The Good, the Bad and the Ugly", year: 1966 },
//     { title: "Fight Club", year: 1999 },
//     {
//         title: "The Lord of the Rings: The Fellowship of the Ring",
//         year: 2001,
//     },
//     {
//         title: "Star Wars: Episode V - The Empire Strikes Back",
//         year: 1980,
//     },
//     { title: "Forrest Gump", year: 1994 },
//     { title: "Inception", year: 2010 },
//     {
//         title: "The Lord of the Rings: The Two Towers",
//         year: 2002,
//     },
//     { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
//     { title: "Goodfellas", year: 1990 },
//     { title: "The Matrix", year: 1999 },
//     { title: "Seven Samurai", year: 1954 },
//     {
//         title: "Star Wars: Episode IV - A New Hope",
//         year: 1977,
//     },
//     { title: "City of God", year: 2002 },
//     { title: "Se7en", year: 1995 },
//     { title: "The Silence of the Lambs", year: 1991 },
//     { title: "It's a Wonderful Life", year: 1946 },
//     { title: "Life Is Beautiful", year: 1997 },
//     { title: "The Usual Suspects", year: 1995 },
//     { title: "Léon: The Professional", year: 1994 },
//     { title: "Spirited Away", year: 2001 },
//     { title: "Saving Private Ryan", year: 1998 },
//     { title: "Once Upon a Time in the West", year: 1968 },
//     { title: "American History X", year: 1998 },
//     { title: "Interstellar", year: 2014 },
//     { title: "Casablanca", year: 1942 },
//     { title: "City Lights", year: 1931 },
//     { title: "Psycho", year: 1960 },
//     { title: "The Green Mile", year: 1999 },
//     { title: "The Intouchables", year: 2011 },
//     { title: "Modern Times", year: 1936 },
//     { title: "Raiders of the Lost Ark", year: 1981 },
//     { title: "Rear Window", year: 1954 },
//     { title: "The Pianist", year: 2002 },
//     { title: "The Departed", year: 2006 },
//     { title: "Terminator 2: Judgment Day", year: 1991 },
//     { title: "Back to the Future", year: 1985 },
//     { title: "Whiplash", year: 2014 },
//     { title: "Gladiator", year: 2000 },
//     { title: "Memento", year: 2000 },
//     { title: "The Prestige", year: 2006 },
//     { title: "The Lion King", year: 1994 },
//     { title: "Apocalypse Now", year: 1979 },
//     { title: "Alien", year: 1979 },
//     { title: "Sunset Boulevard", year: 1950 },
//     {
//         title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
//         year: 1964,
//     },
//     { title: "The Great Dictator", year: 1940 },
//     { title: "Cinema Paradiso", year: 1988 },
//     { title: "The Lives of Others", year: 2006 },
//     { title: "Grave of the Fireflies", year: 1988 },
//     { title: "Paths of Glory", year: 1957 },
//     { title: "Django Unchained", year: 2012 },
//     { title: "The Shining", year: 1980 },
//     { title: "WALL·E", year: 2008 },
//     { title: "American Beauty", year: 1999 },
//     { title: "The Dark Knight Rises", year: 2012 },
//     { title: "Princess Mononoke", year: 1997 },
//     { title: "Aliens", year: 1986 },
//     { title: "Oldboy", year: 2003 },
//     { title: "Once Upon a Time in America", year: 1984 },
//     { title: "Witness for the Prosecution", year: 1957 },
//     { title: "Das Boot", year: 1981 },
//     { title: "Citizen Kane", year: 1941 },
//     { title: "North by Northwest", year: 1959 },
//     { title: "Vertigo", year: 1958 },
//     {
//         title: "Star Wars: Episode VI - Return of the Jedi",
//         year: 1983,
//     },
//     { title: "Reservoir Dogs", year: 1992 },
//     { title: "Braveheart", year: 1995 },
//     { title: "M", year: 1931 },
//     { title: "Requiem for a Dream", year: 2000 },
//     { title: "Amélie", year: 2001 },
//     { title: "A Clockwork Orange", year: 1971 },
//     { title: "Like Stars on Earth", year: 2007 },
//     { title: "Taxi Driver", year: 1976 },
//     { title: "Lawrence of Arabia", year: 1962 },
//     { title: "Double Indemnity", year: 1944 },
//     {
//         title: "Eternal Sunshine of the Spotless Mind",
//         year: 2004,
//     },
//     { title: "Amadeus", year: 1984 },
//     { title: "To Kill a Mockingbird", year: 1962 },
//     { title: "Toy Story 3", year: 2010 },
//     { title: "Logan", year: 2017 },
//     { title: "Full Metal Jacket", year: 1987 },
//     { title: "Dangal", year: 2016 },
//     { title: "The Sting", year: 1973 },
//     { title: "2001: A Space Odyssey", year: 1968 },
//     { title: "Singin' in the Rain", year: 1952 },
//     { title: "Toy Story", year: 1995 },
//     { title: "Bicycle Thieves", year: 1948 },
//     { title: "The Kid", year: 1921 },
//     { title: "Inglourious Basterds", year: 2009 },
//     { title: "Snatch", year: 2000 },
//     { title: "3 Idiots", year: 2009 },
//     { title: "Monty Python and the Holy Grail", year: 1975 },
// ];

export default function CreateSection() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [notify, setNotify] = useState(false);
    const { courses } = useSelector((state) => state.courses);
    const [selected, setSelected] = useState([]);
    const { available_subjects } = useSelector((state) => state.subjects);
    const [subjectDatas, setSubjectDatas] = useState([]);

    useEffect(() => {
        setSubjectDatas(available_subjects ?? []);
    }, []);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    async function submitForm(params) {
        setLoading(true);
        const result = await store.dispatch(
            store_instructor_thunk({
                ...data,
                user_type: 2,
            }),
        );
        if (result.status == 200) {
            await store.dispatch(get_instructor_thunk());
            await store.dispatch(get_available_subject_thunk());
            setNotify(true);
            setError({});
            setLoading(false);
        } else {
            setLoading(false);
            setError(result.response.data.errors);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setNotify(false);
        setOpen(false);
    };

    function select_department(e) {
        const selected = available_subjects.filter(
            (res) => res.course.id == e.target.value,
        );
        setSubjectDatas(selected);

        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    const handleChange = (event, newValue) => {
        setData({
            ...data,
            selected_subjects: newValue,
        });
    };
    return (
        <div>
            <Snackbar
                open={notify}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Successfully Created!
                </Alert>
            </Snackbar>
            <Button variant="contained" onClick={toggleDrawer(true)}>
                Create Instructor
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box className="w-[500px] h-full flex" role="presentation">
                    <div className="pt-20 px-3 w-full flex flex-col items-center justify-between pb-5">
                        <div className="flex flex-col gap-3  w-full">
                            <div className="text-2xl font-black">
                                Create Instructor
                            </div>
                            <TextField
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                error={error?.user_id ? true : false}
                                helperText={error?.user_id ?? ""}
                                name="user_id"
                                type="text"
                                id="outlined-basic"
                                label="Employee ID"
                                variant="outlined"
                            />
                            <TextField
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                error={error?.fname ? true : false}
                                helperText={error?.fname ?? ""}
                                name="fname"
                                type="text"
                                id="outlined-basic"
                                label="First Name"
                                variant="outlined"
                            />
                            <TextField
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                error={error?.lname ? true : false}
                                helperText={error?.lname ?? ""}
                                name="lname"
                                type="text"
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined"
                            />
                            <TextField
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                error={error?.email ? true : false}
                                helperText={error?.email ?? ""}
                                name="email"
                                type="email"
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                            />
                            <TextField
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                error={error?.password ? true : false}
                                helperText={error?.password ?? ""}
                                name="password"
                                type="password"
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                            />

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Department
                                </InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name="department_id"
                                    label="Department"
                                    onChange={(e) => select_department(e)}
                                >
                                    {courses.data.map((res, i) => {
                                        return (
                                            <MenuItem key={i} value={res.id}>
                                                {res.name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                            {data.department_id && (
                                <Autocomplete
                                    multiple
                                    id="tags-outlined"
                                    onChange={handleChange}
                                    options={subjectDatas}
                                    getOptionLabel={(option) => option.name}
                                    // defaultValue={[subjectDatas[13]]}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            value={params}
                                            label="Select Subjects"
                                            placeholder="Favorites"
                                        />
                                    )}
                                />
                            )}
                        </div>
                        <br />
                        <Button
                            onClick={submitForm}
                            disabled={loading}
                            variant="contained"
                            className=" w-full"
                        >
                            {loading ? (
                                <CircularProgress size={24} color="inherit" />
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}
