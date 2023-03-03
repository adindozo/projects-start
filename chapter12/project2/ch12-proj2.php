<?php

include 'data.inc.php';
function generateOpts($strings)
{
    foreach ($strings as $string) {
        echo "<option>$string</option>";
    }
}


?>
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="utf-8">
    <title>Chapter 12</title>
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/styles.css" />
</head>

<body>
    <?php include 'header.inc.php'; ?>

    <main>
        <form class="form" id="mainForm" method="POST" action="art-process.php">
            <fieldset class="form__panel">
                <legend class="form__heading">Edit Art Work Details</legend>
                <p class="form__row">
                    <label>Title</label><br />
                    <input type="text" name="title" class="form__input form__input--large" />
                </p>
                <p class="form__row">
                    <label>Description</label><br />
                    <input type="text" name="description" class="form__input form__input--large">
                </p>
                <p class="form__row">
                    <label>Genre</label><br />
                    <select name="genre" class="form__input form__select">
                        <option>Choose genre</option>
                        <?php
                        generateOpts($genres)
                        ?>

                    </select>
                </p>
                <p class="form__row">
                    <label>Subject</label><br />
                    <select name="subject" class="form__input form__select">
                        <option>Choose subject</option>
                        <?php
                        generateOpts($subjects)
                        ?>

                    </select>
                </p>
                <p class="form__row">
                    <label>Medium</label><br />
                    <input type="text" name="medium" class="form__input form__input--medium" />
                </p>
                <p class="form__row">
                    <label>Year</label><br />
                    <input type="text" name="year" class="form__input form__input--small" />
                </p>
                <p class="form__row">
                    <label>Museum</label><br />
                    <input type="text" name="museum" class="form__input form__input--medium" />
                </p>

                <div class="form__box">
                    <input type="submit" class="form__btn"> <input type="reset" value="Clear Form" class="form__btn">
                </div>
            </fieldset>
        </form>
    </main>
</body>

</html>