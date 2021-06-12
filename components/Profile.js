import React from 'react'
import styles from '../styles/Profile.module.css'
import { ImUserTie } from 'react-icons/im'

function Profile() {
    return (
        <div className={styles.bioContainer} style={{ height: "fit-content" }}>
            <ImUserTie size="25rem" style={{ width: "50%" }} />
            <h2 className={styles.bio}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit minus excepturi itaque, iste laudantium aspernatur nemo dolor ipsa. Molestias amet voluptate quo ipsam reprehenderit ea omnis pariatur deleniti ad incidunt.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eaque autem hic qui distinctio commodi veniam, unde est officia necessitatibus, impedit illum eos amet maxime consequatur quaerat temporibus, reiciendis accusamus?
            </h2>
        </div>
    )
}

export default Profile
